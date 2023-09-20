export default function Custom404() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="Not Found"
        style={{
          width: "50%",
          height: "50vh",
        }}
      />
      <button
        style={{
          display: "inline-flex",
          padding: "15px 30px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "26px",
          background: "#D92365",
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Jost",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "22px",
        }}
      >
        Go HomePage
      </button>
    </div>
  );
}
