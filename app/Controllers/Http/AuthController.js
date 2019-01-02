"use strict";
const { validate } = use("Validator");
const Hash = use("Hash");
const User = use("App/Models/User");

class AuthController {
  async register({ response, request, view }) {
    return view.render("auth/register");
  }
  async storeUser({ request, session, response, auth }) {
    //Validation rules
    const validation = await validate(request.all(), {
      email: "required|email|unique:users,email",
      password: "required|min:6|max:40",
      confirm_password: "required"
    });

    //Check if passwords match
    if (request.input("password") == request.input("confirm_password")) {
      //check if it fails validation
      if (validation.fails()) {
        session.withErrors(validation.messages()).flashExcept(["password"]);

        return response.redirect("back");
      } else {
        //save the user to db
        try {
          let newUser = await User.create({
            email: request.input("email"),
            password: request.input("password")
          });
        } catch (error) {
          //show errors for problems with db
          console.log("error");
          session
            .withErrors([
              { field: "database", message: "Problem with database try later" }
            ])
            .flashExcept(["password"]);
          return response.redirect("back");
        }
        session.flash({ notification: "Welcome to ExpectCompany" });
        return response.redirect("/");
      }
    } else {
      //show errors with mismatch pw
      session
        .withErrors([
          { field: "password", message: "Need to confirm password" },
          { field: "confirm_password", message: "Need to confirm password" }
        ])
        .flashExcept(["password"]);

      return response.redirect("back");
      return "Passwords do not match";
    }
  }

  async login({ response, request, view }) {
    return view.render("auth/login");
  }
  async loginUser({ response, request, view, auth, session }) {
    //capture data from form
    const postData = request.post();

    //find user in the db by email
    const user = await User.query()
      .where("email", postData.email)
      .first();
    if (user) {
      //verify pw
      const passwordVerified = await Hash.verify(
        postData.password,
        user.password
      );

      if (passwordVerified) {
        //login user
        await auth.login(user);
        session.flash({ notification: "Welcome to ExpectCompany" });
        return response.redirect("/");
      } else {
        //pw incorrect
        session
          .withErrors([
            { field: "password", message: "Incorrect password" }
          ])
          .flashExcept(["password"]);
        return response.redirect("back");
      }
    } else {
      //cannot find user with that email
      session
        .withErrors([
          { field: "email", message: "Cannot find user with that email" }
        ])
        .flashExcept(["password"]);
      return response.redirect("back");
    }
  }
  async forgotPassword({ response, request, view }) {
    return view.render("auth/forgotPassword");
  }
  async logout({ response, request, view, auth }) {
    try {
      await auth.logout();
      return response.redirect("/");
    } catch (error) {
      console.log(error);
      return "Error.  Could not log out";
    }
  }
}

module.exports = AuthController;
