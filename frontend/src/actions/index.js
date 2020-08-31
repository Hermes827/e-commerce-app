export const GET_INFO = 'GET_INFO';
export const getInfo = (arg) => ({
  type: GET_INFO,
  payload: { arg }
});

export function getUserInfo(arg) {
  var myHeaders = new Headers();
  myHeaders.append("x-access-token", arg);
  return function(dispatch, getState) {
    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
    fetch("http://localhost:4000/auth/info", requestOptions)
    .then(response => response.json())
    .then(json => {
      dispatch(getInfo(json))
    })
  };
}

// export const GET_CHOSENMAIL = 'GET_CHOSENMAIL';
// export const getChosenMail = (arg) => ({
//   type: GET_CHOSENMAIL,
//   payload: { arg }
// })

// export function storeUserCookie(arg) {
//   return function(dispatch, getState) {
//     var myHeaders = new Headers();
//     myHeaders.append("x-access-token", arg);
//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };
//     fetch("http://localhost:4000/api/auth/info", requestOptions)
//       .then(response => response.json())
//       .then(json => {
//         dispatch(getData(json))
//       })
//   };
// }
