

export const goToLogin = (navigate) => {
    navigate("/"); 
}

export const goToFeed = (navigate) => {
    navigate("../feed", {replace:true}); 
}

export const goToPost = (navigate, postId) => {
    navigate(`../feed/${postId}`); 
}

export const goToSignUp = (navigate) => {
    navigate("/signup"); 
}

export const goToLastPage = (navigate) => {
    navigate(-1); 
}