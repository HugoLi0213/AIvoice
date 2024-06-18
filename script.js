document.addEventListener('DOMContentLoaded', function() {
    const audioSelect = document.getElementById('audioSelect');
    const playButton = document.getElementById('playButton');
    const audioPlayer = document.getElementById('audioPlayer');

    // List of audio file names
    const audioFiles = [
        'Cheung_Chau_Cover_CN.mp3',
        'Cheung_Chau_Cover_FR.mp3',
        'Cheung_Chau_Cover_KR.mp3',
        'Cheung_Chau_Cover_Spanish.mp3',
        'Cheung_Chau_Cover_EN.mp3',
        'Cheung_Chau_Cover_JP.mp3'
    ];

    // Clear existing options
    audioSelect.innerHTML = '';

    // Populate the select element with audio file options
    audioFiles.forEach(file => {
        const option = document.createElement('option');
        option.value = file;
        option.textContent = file; // Display file name as option text
        audioSelect.appendChild(option);
    });

    // Enable/disable play button based on selection
    audioSelect.addEventListener('change', function() {
        if (this.value!== '') {
            playButton.disabled = false;
            audioPlayer.src = this.value;
        } else {
            playButton.disabled = true;
        }
    });

    // Play the selected audio file
    playButton.addEventListener('click', function() {
        audioPlayer.play();
    });
});