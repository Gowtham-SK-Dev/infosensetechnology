export default function BackgroundCircles() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0">
        {/* Green - top left */}
        <span
          className="absolute rounded-full blur-3xl opacity-60 dark:opacity-45"
          style={{
            width: "35rem",
            height: "35rem",
            left: "-8rem",
            top: "-8rem",
            background:
              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.8) 0%, rgba(34,197,94,0.25) 42%, rgba(34,197,94,0) 65%)",
          }}
        />
        {/* Purple - top right */}
        <span
          className="absolute rounded-full blur-3xl opacity-60 dark:opacity-45"
          style={{
            width: "33rem",
            height: "33rem",
            right: "-7rem",
            top: "-6rem",
            background:
              "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.25) 42%, rgba(168,85,247,0) 65%)",
          }}
        />
        {/* Yellow - bottom left */}
        <span
          className="absolute rounded-full blur-3xl opacity-55 dark:opacity-40"
          style={{
            width: "31rem",
            height: "31rem",
            left: "-6rem",
            bottom: "-8rem",
            background:
              "radial-gradient(circle at 50% 50%, rgba(250,204,21,0.9) 0%, rgba(250,204,21,0.28) 45%, rgba(250,204,21,0) 68%)",
          }}
        />
        {/* Blue - bottom right */}
        <span
          className="absolute rounded-full blur-3xl opacity-60 dark:opacity-45"
          style={{
            width: "37rem",
            height: "37rem",
            right: "-10rem",
            bottom: "-10rem",
            background:
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.25) 42%, rgba(59,130,246,0) 65%)",
          }}
        />
        {/* Orange - center left */}
        <span
          className="absolute rounded-full blur-3xl opacity-45 dark:opacity-35"
          style={{
            width: "24rem",
            height: "24rem",
            left: "8%",
            top: "35%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(249,115,22,0.7) 0%, rgba(249,115,22,0.20) 50%, rgba(249,115,22,0) 70%)",
          }}
        />
        {/* Pink - center right */}
        <span
          className="absolute rounded-full blur-3xl opacity-45 dark:opacity-35"
          style={{
            width: "26rem",
            height: "26rem",
            right: "12%",
            top: "55%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.7) 0%, rgba(236,72,153,0.20) 50%, rgba(236,72,153,0) 70%)",
          }}
        />
        {/* Teal - middle top */}
        <span
          className="absolute rounded-full blur-3xl opacity-40 dark:opacity-30"
          style={{
            width: "28rem",
            height: "28rem",
            left: "50%",
            top: "-5rem",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(20,184,166,0.6) 0%, rgba(20,184,166,0.18) 50%, rgba(20,184,166,0) 70%)",
          }}
        />
        {/* Indigo - middle bottom */}
        <span
          className="absolute rounded-full blur-3xl opacity-40 dark:opacity-30"
          style={{
            width: "30rem",
            height: "30rem",
            left: "50%",
            bottom: "-7rem",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0.18) 50%, rgba(99,102,241,0) 70%)",
          }}
        />
      </div>
    </div>
  )
}
