import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../Firebase/firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux'   
import FlipMove from"react-flip-move";

const Feed = () => {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))
            )
        )
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || " ",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

            

        })
        setInput('');
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={sendPost}>Send </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#cd853f' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#e25822' />

                </div>
            </div>

            <div className="posts">
                <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
                (
                  
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                ))}
                    </FlipMove>
                  
            </div>
        </div>
    )
}

export default Feed