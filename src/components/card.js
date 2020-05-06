import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export default function Card(props){
    const [size, setSize] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(0);
    
    let gallery_image_length = 0;
    (props.video && props.video.snippet.images) && (gallery_image_length = props.video.snippet.images.length-1);

    const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(purple[500]),
          backgroundColor: purple[500],
          '&:hover': {
            backgroundColor: purple[700],
          },
        },
    }))(Button);

    const handleChange = (event) => {
        setSize(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

      const handleNext = () => {
          (image === gallery_image_length) ? setImage(0) : setImage(image+1)
      }

      const handlePrev = () => {
          (image === 0) ? setImage(gallery_image_length) : setImage(image-1)
      }

    return (
        props.video ? (
            <>
            {
                props.video.snippet.resourceId ? (
                    <a href={`https://www.youtube.com/watch?v=${props.video.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
                    <div className="cards">
                        <div className="thumbnail" style={{backgroundImage:`url(${props.video.snippet.thumbnails.medium.url})`}} />
                        <div className="card_title">{props.video.snippet.title}</div>
                        <div className="card_description">{props.video.snippet.description}</div>
                        <div className="card_owner">LiveInColor Media</div>
                    </div>
                    </a>
                ) : (
                    <div className="cards expanded">
                        <div className="thumbnail image_gallery" style={{backgroundImage:`url(${props.video.snippet.images[image]})`}} >
                            <div className="next_button slide_button" onClick={handleNext}>&#8594;</div>
                            <div className="prev_button slide_button" onClick={handlePrev}>&#8592;</div>
                        </div>
                        <div className="card_title expanded_info expanded_title">{props.video.snippet.title}</div>
                        <div className="card_description expanded_info expanded_description single_line">{props.video.snippet.description}</div>
                        <div className="card_price expanded_info expanded_price">${props.video.snippet.price}</div>
                        <FormControl className="dropdown expanded_dropdown">
                            <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={size}
                            onChange={handleChange}
                            >
                            <MenuItem value={0}>Small</MenuItem>
                            <MenuItem value={1}>Medium</MenuItem>
                            <MenuItem value={2}>Large</MenuItem>
                            <MenuItem value={3}>X Large</MenuItem>
                            <MenuItem value={4}>XX Large</MenuItem>
                            </Select>
                        </FormControl>
                        <ColorButton variant="contained" color="primary" className="add_to_cart expanded_cart">
                            Add To Cart
                        </ColorButton>
                    </div>
                )
            }
            </>
        ) : null 
    )
}