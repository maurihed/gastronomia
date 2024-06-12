export const fetchTopics = async () => {
    const response = await fetch('./data/topics.json');
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}
