import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from "../../img/congo.png";
import "../../css/auth.css";

function Login() {
  return (
    <div className="relative principal">
      <div className="flex items-center h-full w-full absolute top-1/2 left-1/2 box">
        <div className="w-6/12">
          <div className="w-7/12 mx-auto">
            <img
              src={Logo}
              alt="Emblème du Congo"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-6/12">
          <form className="flex max-w-md flex-col gap-4 shadow-lg rounded-lg pb-10 pt-5 px-10">
            <h2 className="text-2xl font-medium text-gray-700 text-center">
              Connexion
            </h2>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="E-mail" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Votre e-mail"
                required className=""
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Mots de passe" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="****************"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="agree" className="flex">
                Mots de passe&nbsp;
                <Link to="/admin/lost" className="text-red-600 hover:underline">
                  oublié ?
                </Link>
              </Label>
            </div>
            <Link to="/">
              <Button type="submit" className="bg-red-600">
                Se connecter
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
