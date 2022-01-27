import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';


function Results({ results }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-5 3xl:flex">
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    );
}

export default Results;