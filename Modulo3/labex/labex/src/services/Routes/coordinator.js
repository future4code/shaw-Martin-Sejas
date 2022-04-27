//make here your navigation functions

import { Navigate } from "react-router-dom";

export const goToHomePage = (navigate) => {
    navigate("/", {replace: true});
}

export const goToListTripsPage = (navigate) => {
    navigate("../trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("../trips/application")
}

export const goToLoginPage = (navigate) => {
   
    navigate("../login")
}

export const goToAdminHomePage = (navigate) => {
    navigate("../admin/trips/list")
}

export const goToCreateTripPage = (navigate) => {
    navigate("../admin/trips/create")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`../admin/trips/${id}` )
}

export const goToLastPage = (navigate) => {
    navigate(-1);
}



