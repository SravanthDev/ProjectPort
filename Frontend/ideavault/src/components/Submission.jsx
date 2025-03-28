import { useState } from "react";

function Submission() {
  const [formData, setFormData] = useState({
    name: "",
    urn: "",
    githubLink: "",
    hostingLink: "",
  });

  function handleSubmit(ev) {
    console.log(ev.target.value);
    console.log(formData);
    setFormData({
      name: "",
      urn: "",
      githubLink: "",
      hostingLink: "",
    });
  }

  function handleChange(ev) {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-center font-bold text-blue-600">Submit</h2>
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
              Code Link :
            </label>
            <input
              type="url"
              placeholder="https://github.com/username/repository"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Hosting Link :
            </label>
            <input
              type="url"
              placeholder="https://your-hosting.com/project"
              name="hostingLink"
              value={formData.hostingLink}
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
export default Submission;
