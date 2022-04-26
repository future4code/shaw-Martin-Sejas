//make here your navigation functions

import { Navigate } from "react-router-dom";

export const goToHomePage = (navigate) => {
    navigate("/", {replace: true});
}

export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goToLoginPage = (navigate) => {
   
   navigate("/login", {replace: true})
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list", {replace: true})
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create", {replace: true})
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}` )
}

export const goToLastPage = (navigate) => {
    navigate(-1);
}



