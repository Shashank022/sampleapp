import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

function ApiCall() {

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'left',
          color: theme.palette.text.secondary,
        },
        divoptions:{
            padding:'40px',
        },
        headerOpt:{
            padding:'20px',
            textAlign: "center",
        }
      }));

const[posts, setPosts] = useState([]);
const classes = useStyles();
const[visible, setVisible] = useState(true);

    useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts").then( (resp)=>{
                console.log("****************************");
                console.log(resp);
                setPosts(resp.data);
                console.log(resp.data);
            })
        }, []);

    const handleSubmit=()=>{
        console.log(" IN HANDLE POST WITH THE ID : ");
            const post={
                userId : 122222,
                body :"sdahgfajsdhkjhagfjahsdjhfagsdgf",
                id:456,
                title:"Welcome to the New Post 456"
            }

        axios.post("https://jsonplaceholder.typicode.com/posts", {post}).then((resp)=>{
                console.log(resp.data);
                setVisible(false);
        });
    }

    const deletePost=(id)=>{
        console.log(" IN DELETE POST WITH THE ID : ",id);
    }

    // const deletePost=(id)=>{
    //     console.log(" IN DELETE POST WITH THE ID : " +id);
    //     axios.delete("https://jsonplaceholder.typicode.com/posts/id?="+ {id}).then((resp)=>{
    //         //console.log(resp.data);
    //     });
   
    // }



    return (
        <div>
            <div className={classes.headerOpt}>
                WELCOME TO THE POSTS 
            </div>
            <div className={classes.divoptions}>
                    {posts.map((post, id)=>(
                        <Grid container spacing={3} key={id}>
                            <Grid item xs={10} className={classes.paper}>
                                {post.id} .
                                {post.title}
                                {post.body}
                            </Grid>
                            <Grid item xs={1} className={classes.paper}>
                                <button onClick={handleSubmit}>Submit</button>
                            </Grid>
                            <Grid item xs={1} className={classes.paper}>
                                <button onClick={deletePost}>Delete</button>
                            </Grid>
                        </Grid>
                    ))}
             </div>
        </div>
    )
}

export default ApiCall
