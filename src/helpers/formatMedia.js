export const formatMedia = (url) => {
   const format =  url.split(".").slice(-1).toString().toLowerCase();
   return format
}