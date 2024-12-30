function formatDate (createdDate) {

    const date = new Date(createdDate);

    const formatter = new Intl.DateTimeFormat("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return formatter.format(date);


}

export default formatDate;