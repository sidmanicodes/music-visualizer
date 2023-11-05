import { useState } from "react";

const AddMusic = ({ onFileSelected }) => {
    const [selectedFile, setSelectedFile] = useState('');

    // Handles when the file is changed
    const handleFileChange = (e) => {
        const file = e.target.file[0];
        setSelectedFile(file);
        onFileSelected(file);
    };
}

export default AddMusic;