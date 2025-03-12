import { NoteObject } from "../models/note";
import { Box, Button, Card ,CardContent, styled, Typography } from "@mui/material";

interface IndivisualNote {
    note: NoteObject,
    deleteNote: (toBedeleteId: string) => void
}

const StyledCard = styled(Card)`
    width:400px;
    margin:10px;
`

const Warpper = styled(Box)`
    & > Button {
        border: 1px solid #000;
        margin-top:5px
    }
`

const Note:React.FC<IndivisualNote> = ({note,deleteNote}) => {
    return (
        <StyledCard style={{backgroundColor:note.color}}>
            <CardContent>
                <Warpper>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.details}</Typography>
                    <Typography>{note.date}</Typography>
                    <Button variant="outlined" onClick={()=>deleteNote(note.id)}>Delete</Button>
                </Warpper>
            </CardContent>
        </StyledCard>
    )
}

export default Note;