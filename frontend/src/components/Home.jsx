import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Card sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
                {post.img_url && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.img_url}
                    alt={post.title}
                    sx={{ objectFit: "cover" }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {post.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="secondary">
                    DELETE
                  </Button>
                  <Button variant="contained" color="secondary">
                    UPDATE
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography align="center" color="text.secondary">
              No posts available. Add a new post!
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;