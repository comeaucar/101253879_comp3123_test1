const resolvedPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(resolve({message: "delayed succcess!"}), 500);
    })
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(reject({message: "delayed exception!"}), 500)
    })
}

resolvedPromise().then((message) => console.log(message))
rejectPromise().catch((message) => console.log(message))