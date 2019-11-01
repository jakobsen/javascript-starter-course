/**
 * 
 * EasyHTTP Library
 * 
 * @version 2.0.0
 * @author Brad Traversy
 * @license MIT
 * 
 **/

 class EasyHTTP {
  // Make HTTP GET Request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
   }

   // Make an HTTP POST request
   async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();

    return resData;
  }

   // Make HTTP PUT Request
   async put(url, data) {
     const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    const resData = await response.json();
    return resData;
    

   }

   // Make HTTP DELETE Request
   async delete(url) {
     const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        });
    const resData = await response.json();
    if (Object.entries(resData).length === 0 && resData.constructor === Object) {
      return "Resource Deleted.";
    }
    return resData;
   }
 }