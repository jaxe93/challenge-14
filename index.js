

        document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Fetch values from the form
            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;

            // TODO: Send the comment data to the server for processing

            // Clear the form
            document.getElementById('commentForm').reset();
        });

        // TODO: Fetch and display comments from the server


    //may want to try and include the react-chatbot-kit 