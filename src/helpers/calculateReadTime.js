function calculateReadTime (blogcontent) {
    const words = blogcontent.trim().split(/\s+/).length;
    const readTime = Math.ceil((words/100)*0.3);

    return readTime;
}

export default calculateReadTime;
