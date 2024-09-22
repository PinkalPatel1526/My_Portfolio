import Box from '@mui/material/Box';


export default function TitleName({ title }) {
    return (
        <div>

            <h2 style={{
                fontFamily: '"Squada One", sans-serif',
                fontWeight: '900'
            }}> 
            <span className="material-symbols-outlined">
            {title}
            </span>  </h2>
            <hr />

        </div>
    );
}