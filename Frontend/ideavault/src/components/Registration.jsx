import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    urn: "",
    email: "",
    batch: "A",
    projectName: "",
    projectDescription: "",
  });

  const handleSubmit = (ev) => {
    console.log(ev.target.value);
    console.log(formData);
    setFormData({
      name: "",
      urn: "",
      email: "",
      batch: "A",
      projectName: "",
      projectDescription: "",
    });
  };

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex-col justify-center p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-center font-bold text-blue-600">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Name :</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Urn :</label>
            <input
              type="text"
              placeholder="2024-A-xxxxxxx"
              name="urn"
              value={formData.urn}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              College Email :
            </label>
            <input
              type="email"
              placeholder="abc.xyz@adypu.edu.in"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Batch :</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="A">Batch A</option>
              <option value="B">Batch B</option>
              <option value="C">Batch c</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Project Name :
            </label>
            <input
              type="text"
              placeholder="Enter your project name"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Project Description :
            </label>
            <input
              type="text"
              placeholder="Enter your project description"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2.5 hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Registration;
