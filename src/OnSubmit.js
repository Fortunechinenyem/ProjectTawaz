const onSubmit = (e) => {
  e.preventDefault();
  if (mobileNumber.length < 1) {
    setNumberEmptyError(true);
    setTimeout(() => setNumberEmptyError(false), 3000);
  } else if (message.length < 1) {
    setMessageEmptyError(true);
    setTimeout(() => setMessageEmptyError(false), 3000);
  } else {
    // Regex expression to remove all characters which are NOT alphanumeric
    let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
    let url = `https://web.whatsapp.com/send?phone=${number}`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);
  }
};
