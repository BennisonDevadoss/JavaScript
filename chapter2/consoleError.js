let fuel = 99;
function launch_rocket() {
  function warning_msg() {
    console.error("WARNING!");
    console.error("fual enough fuel");
  }
  if (fuel >= 100) {
  } else warning_msg();
}
launch_rocket();
