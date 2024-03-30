async function handleFormSubmit(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('username').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;

   
    const userId = "your_user_id";

    try {
        const response = await axios.post("https://crudcrud.com/api/eef10d21749a45328d470dad531d4208", {
            name: name,
            feedback: feedback,
            rating: rating
        });

        console.log('Feedback submitted successfully:', response.data);


    } catch (error) {
        console.error('Error submitting feedback:', error);
    }
}