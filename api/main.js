console.log(document.readyState); // Outputs: "loading", "interactive", or "complete"

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});

const initApp = () => {
  const myContent = ["Earn", "Grow", "Give"];
  const myObject = {
    name: "dhuddu",
    myConten: ["Earn", "Grow", "Give"],
    logName: function () {
      console.log(this.name);
    },
  };
  window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
  const key = sessionStorage.length;
  console.log(key);
  const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
  console.log(mySessionData);
};
