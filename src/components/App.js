import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
    const [questions, setQuestions] = useState([])

    useEffect(() => {
      fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched questions:", data);
        setQuestions(data)
      })
      .catch((error) => console.error("Error fetching questions:", error))
    }, []) 

  function handleAddQuestion(newQuestion) {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]); 
  }

  function handleDeleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== id));
    })
    .catch((error) => console.error("Error deleting question:", error));

  }





  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} onDelete={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
