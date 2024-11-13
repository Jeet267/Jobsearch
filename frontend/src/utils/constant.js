let ENDPOINT;

if (process.env.NODE_ENV === "production") {
  console.log("production");
  ENDPOINT = "https://job-portal-mz2k.onrender.com";
} else {

  ENDPOINT = "http://localhost:8000";
}

export default ENDPOINT;
