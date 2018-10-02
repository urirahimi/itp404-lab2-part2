import Route from "@ember/routing/route";
// import $ from "jquery";
export default Route.extend({
  model() {
    // $.getJSON("/api/users");
    return this.store.findAll("user"); // tries to make a get request to /post
  }
});
