import React from 'react'
import { Grid } from '@mui/material'
import './Contact.css'
import contact1 from "../../assets/contact1.png"

import { Location,ArrowRight2,Call,Sms} from 'iconsax-react';
const Contact = () => {
  return (
    <div>
<div className='contact'>
   <Grid  container  direction="column"  alignItems="center" >
  <Grid item >
    <p className='txt1'> Contactez-nous</p><br/>
     </Grid>
  <Grid item >
  <p className='txt2'>Entrez en contact avec notre équipe. Nous <br/>serions ravis de vous donner un coup de main </p>
   <br/><br/><br/>
   </Grid>
  <Grid item >
  <Grid   container direction="row"  spacing={4}> 

<Grid item  >
  <div className='box'>
<Grid  container  direction="column"  alignItems="center"  >
  <div className='contun_box'>
<Grid item >

<Location className='local' size="32" color="#222222" variant="Bold"/>
</Grid>
<Grid item  >
  <p className='adr_con'>Adresse</p>
</Grid>
<Grid item >
  <p className='txt3'>122 Rue de Makthar, Monastir</p>
</Grid>
<Grid item >
  <p className='txt4'>Emplacement</p><p className='arrow'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone"/></p>
</Grid>
</div>
</Grid>

  </div>
</Grid>

<Grid item  >
  <div className='box'>
<Grid  container  direction="column"  alignItems="center"  >
  <div className='contun_box'>
<Grid item >

<Call size="32" className='local'  color="#222222" variant="Bold"/></Grid>
<Grid item  >
  <p className='adr_con'>Téléphone</p>
</Grid>
<Grid item >
  <p className='txt3-box2'>(+216)20 222 222</p>
</Grid>
<Grid item >
  <p className='txt4-box2'>Appelez-nous</p><p className='arrow2'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone"/></p>
</Grid>
</div>
</Grid>

  </div>
</Grid>

<Grid item  >
  <div className='box'>
<Grid  container  direction="column"  alignItems="center"  >
  <div className='contun_box'>
<Grid item >
  <Sms  className='local'size="32" color="#222222" variant="Bold"/>
</Grid>
<Grid item  >
  <p className='adr_con'>E-mail</p>
</Grid>
<Grid item >
  <p className='txt3'>Contact@maktba.com</p>
</Grid>
<Grid item >
  <p className='txt4-box2'>Entrer en contact</p><p className='arrow3'><ArrowRight2 size="18" color="#7C5E10" variant="TwoTone"/></p>
</Grid>
</div>
</Grid>

  </div>
</Grid>



</Grid>
  </Grid>
</Grid>
     
      </div>

          
          
          <div className='g2'>
          <Grid container spacing={5.5}>
              <Grid item>  <img src={contact1} className="image1" />
                <span><p className='txt6-con'>Suivez-nous sur:</p></span>
                <div className='icon-con2'>
                  <Link to="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nO3TsQ3CMBBA0RcxQSpqZqBniEzAVrTswAZMQZOWEuoU6BCtJZCCsA3CX7r6SXc2rS+vwxZHXHHDBSPWOeE94slscqHDCzQrfKgFnxNoh16BpgReKlQk09WCsxUzZ1UDnrCoAZ8+hc6FH3/89x9XWoOLFe3GpYq26lLF36265Z3ugcmLNVEqKJcAAAAASUVORK5CYII=" className='fa fa-facebook-f' /></Link>
                  <Link to="#"><img className='fa fa-twitter' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nOXUMUscURQF4C+RVEmjhSAJimBlF2xESZNAVLBYRCxEbLWxsUkhEdMIKdKkSSBN0vgDtLBKCnsLLdxCm+gKNhFEgi5u3LAwA8sww7xhp0oO3GJ495xz5973Lv8KHhbMf4INHKOOGj7hWVvOMPrijw94GSjegwM0U+IX3uE79vAgJp3hGpMBBlsZ4u1RxRQqMekmOmhgHY8yxHvxJ8DgDufoj4nVRMIRZtGVMHgVIB7zB9qJaxmJNXzEDIYwEWjwNvnrj7EfSG4GxHLS4ATb0QzKMKgkDX6UWH0z2f8WxnFfkng1636/KcnkfZZB6+5P47AD8Vs8zTLoxlWH1X+Wg6UO2vQzKjIXC9FuKiLewIsQ8fZ5LOJ3gHg9WivBGMHXaGE1c6I1s9d5gmP4gl1cFGjLTtqDysIgNnGaI3qJbxgt0pI0szmsRI9vFfN4nrK+/wP8BZuBFXDRPn1vAAAAAElFTkSuQmCC" /></Link>

                  <Link to="#"><img className="fa fa-instagram" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2WwU7CQBCGv7t4A05y5ih6EDH6Dkp8IJEnUOQhMCQ8iehD6E1NWz3IQTEb/yakobutmRoP/Mkkzc7MfpnJdLKw0T9QExgC98A7sCxoLnau3EZZ6DmQlIDlWQz0y0C/DKCpfRaBN40qzVoUavvQCHQEHGfOBj7wgxHYQU8yZ3MfONTmD+AK6AJbMvc9AhaB3MQH9iU+Arue3I5ifHfkyldpCm0BU1XgbAa05dsLVJ6rvATX3hT6ssb/Kp/TjSX4QP6pJ+ZWMYeW4FqB4XNbymn7r8FRFeCu/DNPzEQxPUvwtfxtDVLW/wzsKGZs/Tt1FNPSIMWyyQp03/p3Wmo5pPB1ctCnwB2/XpkLrceeBq6m73GBlRnnY39eG8uK7M4HvqwQfOEDN9QSa2gE1Amor+eKFdTddRqCrsIjo0rPikJT1fVccUPxVgKWKGdQpL0bUbW+AcdI0V4wAXsCAAAAAElFTkSuQmCC" /></Link>
                  <Link to="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA4ElEQVR4nO2WvQ4BQRSFvxU6P4VG5wU0KioqiQ3eQu81VJ7DA+h0RFTeQLUrohSFiLArktlkTGOLmVk/e5JT3HPvzZfMTDGQ6h/VA3ZAqMk+4MYB+xqhkb044NCQ30pdOAJL4GwTfAKqIq8DN1vgtdLzbIEvQEPkAyCwecd3YJ/E4xoLT0R9kLIZsAVGQB8YAitdYEfkeVFvpNkmUFL2M8DcNDhSmVd1TIMdYCHyqZRXTINr0twVyIo8ZxrcUmYLUi8wCW4rs8UUzDcedajJnwv2k/r6uJrhT2g3DjjVb+kBRsV7Hz5Qag0AAAAASUVORK5CYII=" className='fa fa-linkedin-in' /></Link>
                </div>


              </Grid>

              <Grid item>
                <div className='g3'>
                  <Grid container direction="column" spacing={2.5}>

                    <Grid item> <p className='con-nous'>Contactez-nous</p> </Grid>
                    <Grid item><OutlinedInput className='input1' placeholder="Votre nom" onChange={handleInputChange("name")} value={user.name} /> </Grid>
                    <Grid item><OutlinedInput className='input1' placeholder="Email" onChange={handleInputChange("email")} value={user.email} /> </Grid>
                    <Grid item><OutlinedInput className='input1' placeholder="Sujet" onChange={handleInputChange("sujet")} value={user.sujet} /> </Grid><br />
                    <Grid item><OutlinedInput className='inpu2' placeholder="Message" multiline rows={5} maxRows={80} onChange={handleInputChange("message")} value={user.message} /> </Grid>
                    <Grid item><button className='bnt-con2' onClick={Submit}>
                      <div className='textbnt-con2'>Envoyer</div></button>
                    </Grid>


                  </Grid>


                </div>
              </Grid>
            </Grid>
          </div><div></div>



  

    </div>
    

  )
}

export default Contact