package br.com.edutech.screens

import android.os.Build
import androidx.annotation.RequiresApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import br.com.edutech.R
import br.com.edutech.components.Container
import br.com.edutech.components.CustomSpacer

@RequiresApi(Build.VERSION_CODES.TIRAMISU)
@Composable
fun MainScreenEd(navController: NavController, id: String) {
    Container {
        ProfileButton(onclick = { navController.navigate("profile/${id}") }, text = "Perfil")
        CustomSpacer(space = 40.dp)
        Subject(navController, "Matemática", id)
        CustomSpacer(space = 20.dp)
        Subject(navController, "Inglês", id)
        CustomSpacer(space = 20.dp)
        Subject(navController, "Português", id)
        CustomSpacer(space = 20.dp)
        Subject(navController, "Física", id)
        CustomSpacer(space = 20.dp)
        Subject(navController, "Química", id)
        CustomSpacer(space = 20.dp)
        Subject(navController, "Geografia", id)
        CustomSpacer(space = 20.dp)
    }
}

@Composable
fun Subject(navController: NavController, name: String, id: String) {
    Row(
        modifier = Modifier
            .fillMaxSize()
            .clip(RoundedCornerShape(30.dp))
            .background(color = Color.White)
            .padding(vertical = 15.dp)
            .clickable { navController.navigate("question/${name}/${id}") },
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = androidx.compose.ui.Alignment.CenterVertically
    ) {
        Text(
            text = name,
            fontWeight = FontWeight.Bold,
            fontSize = 20.sp,
        )
    }
}

@Composable
fun ProfileButton(onclick: () -> Unit, text: String) {
    ElevatedButton(
        onClick = onclick,
        colors = ButtonDefaults.buttonColors(
            containerColor = colorResource(id = R.color.blueTwo)
        ),
        shape = RoundedCornerShape(20.dp),
        modifier = Modifier
            .width(200.dp)
    ) {
        Text(
            text = text,
            fontWeight = FontWeight.Bold,
            fontSize = 20.sp,
            color = Color.White
        )
    }
}
