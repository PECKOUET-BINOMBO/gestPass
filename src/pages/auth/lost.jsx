import React from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Logo from "../../img/congo.png";
import "../../css/auth.css";

function Lost() {
  return (
    
    <div className="relative principal">
      <div className="flex items-center p-5">
        <Link to="/admin/login"  className="inline-block shadow-lg py-3 px-4 rounded-full z-20">
          <div ><i className="fa-solid fa-arrow-left"></i></div>
        </Link>
      </div>
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
              Mots de passe oublié
            </h2>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="E-mail" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Votre e-mail"
                required
              />
            </div>

            <Button type="submit" className="bg-red-600">
              Envoyer
            </Button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Lost;
