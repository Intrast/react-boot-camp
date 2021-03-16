import { Button, List, ListItem, ListItemText, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    textField: {
        'marginBottom': 10
    }
}));

export function Home() {
    return (
        <div>
            <TodoApplication />
        </div>
    );
}

function TodoApplication() {
    const [items, setItems] = useState([{ name: 'c' }, { name: 'a' }, { name: 'b' }]);

    function addEntrtyToItems(newItem) {
        setItems([...items, newItem]);
    }

    return (
        <>
            <CreateTodoItem addEntrtyToItems={addEntrtyToItems}/>
            <TodoList items={items} />
        </>
    );
}

function CreateTodoItem({ addEntrtyToItems }) {
    const classes = useStyles();
    const [name, setName] = useState('default task')

    function handleSubmit(e) {
        e.preventDefault();

        addEntrtyToItems({ name });
    }

    return(
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <TextField label='name' variant="outlined" className={classes.textField}
                        onChange={e => setName(e.target.value)}
                        value={name}
                    ></TextField>
                </div>
                <div>
                    <Button type='submit' variant="contained" color='primary'>
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
}

function TodoList(props) {
    let items = props.items;

    items.sort((x, y) => x.name > y.name ? 1 : -1);

    let listContent = items.map((item, index) => 
        <ListItem key={index}>
            <ListItemText>{item.name}</ListItemText>
        </ListItem>
    );

    return(
        <div>
            <List>
                {listContent}
            </List>
        </div>
    );
}