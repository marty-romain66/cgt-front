import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gsap from 'gsap';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
const tl = gsap.timeline()
React.useEffect(() => {
    tl.to('.css-1gvlcqt-MuiGrid-root' , {
        opacity: 1,
        duration: 5,
    })
   
}, [])
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.lindependant.fr/api/v1/images/view/62cc231c82a95947eb509595/large/image.jpg?v=1)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
           
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fuga aliquam ducimus odit quae consequatur nisi impedit cum rerum, sapiente quo pariatur harum facilis nemo aspernatur est nostrum! Dolorum, dignissimos!
            Quod temporibus ipsam enim officiis alias totam eos voluptatibus. Hic recusandae quas, aut cupiditate sit molestiae dolore odio reiciendis eligendi cumque consectetur nobis sunt magni fugit atque. Nostrum, accusamus esse?
            Nisi eius aliquam architecto vero nesciunt magnam. Labore, similique sit. Molestiae laboriosam, ad, enim eum blanditiis iste voluptas a sint, reiciendis hic illum soluta deserunt adipisci beatae perspiciatis ratione amet!
            Ullam dolor ad laboriosam dolorem sequi ipsum, rerum culpa veniam recusandae facilis aperiam, doloribus animi reiciendis natus placeat incidunt quasi deleniti sint. Porro eum quod rem error maxime, expedita saepe.
            Quidem id sed ex veniam similique inventore, minus minima quasi asperiores praesentium porro distinctio quis, quam nemo magni atque voluptate suscipit debitis? Possimus accusantium unde autem eveniet quo laborum vero?
            Quam perferendis nulla dicta rem quis voluptatibus, officia labore, vel facilis doloribus commodi quas placeat dolorem, saepe odio suscipit deserunt aspernatur excepturi consectetur. Perspiciatis distinctio impedit a incidunt, deserunt nulla!
            Iure dolorum, minus, in amet corrupti consequuntur dolorem laboriosam provident officia accusantium sequi dolores culpa est nisi porro nihil tenetur sapiente repellat ducimus voluptatem. Est exercitationem cumque et omnis eos.
            Dolorum consequatur delectus a harum, totam quas illum quia quibusdam enim ullam amet neque obcaecati similique qui inventore possimus sed voluptas? Magnam consequuntur saepe maxime quasi dolorum nulla vero officiis!
            Excepturi magnam, beatae ex itaque, illo eos fuga corrupti sapiente quibusdam error officia magni, nemo eaque velit. Placeat deserunt ipsa fuga! Nihil nobis quos excepturi reiciendis natus, omnis rerum nam?
            Dolorum, nam porro. Aliquam odit assumenda modi harum impedit ut nulla qui porro quisquam ea ex, sapiente eveniet blanditiis sed maxime velit tempore officia nihil autem obcaecati! Est, iste nulla?</p>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}