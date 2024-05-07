import { useRouter } from "next/router";

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    // Send a request to the backend API
    // to fetch the news item with newsId 
    
    return (
        <h1>The Details Page {newsId}</h1>
    )
}

export default DetailPage;

