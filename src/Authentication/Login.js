import React from "react";

function Login() {
  return (
    <div className="mt-5">
      <div
        class="card float-end mt-5 me-5"
        style={{ width: "22rem", height: "35rem" }}
      >
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your pass:"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
