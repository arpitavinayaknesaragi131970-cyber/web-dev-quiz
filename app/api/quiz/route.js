export async function GET() {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Tool Multi Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling?",
      options: ["HTML", "CSS", "Java", "Python"],
      answer: "CSS"
    },
    {
      question: "Which is a JavaScript framework?",
      options: ["Django", "React", "Laravel", "Flask"],
      answer: "React"
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Internet",
        "Applied Program Interface",
        "None"
      ],
      answer: "Application Programming Interface"
    }
  ];

  return Response.json(questions);
}