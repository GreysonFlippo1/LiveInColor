import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { addCartThunk } from './store/cart';

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

      let hideSize = true
      const sizeStyle = {opacity:0}
      if (props.video && props.video.snippet.sizes_available) {
          hideSize = false
          sizeStyle.opacity = 1
      }

      const addToCart = () => {
        const item = props.video
        addCartThunk(item);
      }

      if (props.video){
          if(props.kind === 'merch'){
            return(
                <div className="cards expanded">
                <div className="thumbnail image_gallery" style={{backgroundImage:`url(${props.video.snippet.images[image]})`}} >
                    {props.video.snippet.images.length > 1 && (
                        <>
                        <div className="next_button slide_button" onClick={handleNext}></div>
                        <div className="prev_button slide_button" onClick={handlePrev}></div>
                        </>
                    )}
                </div>
                <div className="card_title expanded_info expanded_title">{props.video.snippet.title}</div>
                <div className="card_description expanded_info expanded_description single_line">{props.video.snippet.description}</div>
                <div className="card_price expanded_info expanded_price">${props.video.snippet.price}</div>
                <FormControl className="dropdown expanded_dropdown" disabled={hideSize} style={sizeStyle}>
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
                <ColorButton variant="contained" color="primary" className="add_to_cart expanded_cart" onClick={addToCart}>
                    Add To Cart
                </ColorButton>
            </div>)
          } else if(props.kind === 'contributors'){
              return(
                <div className="cards expanded">
                    <div className="thumbnail image_gallery" style={{backgroundImage:`url(${props.video.snippet.thumbnails.medium.url})`}} />
                    <div className="card_title expanded_info expanded_title">{props.video.snippet.title}</div>
                    <div className="card_description expanded_info expanded_description single_line">{props.video.snippet.position_description}</div>
                    <div className="card_description expanded_info expanded_description single_line">{props.video.snippet.description}</div>
                </div>)
          } else{
              return(
                <a href={`https://www.youtube.com/watch?v=${props.video.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
                <div className="cards">
                    <div className="thumbnail" style={{backgroundImage:`url(${props.video.snippet.thumbnails.medium.url})`}} />
                    <div className="card_title">{props.video.snippet.title}</div>
                    <div className="card_description">{props.video.snippet.description}</div>
                    <div className="card_owner">LiveInColor Media</div>
                </div>
                </a>)
          }
      }

      return null;
}