const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="p-2 m-2 border border-black"
        />
        <input
          type="text"
          placeholder="message"
          className="p-2 m-2 border border-black"
        />
        <button className="p-2 m-2 border border-black bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
