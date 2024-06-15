package br.com.edutech.components

import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ElevatedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import br.com.edutech.R

@Composable
fun BackButton(onclick: () -> Unit, text: String) {
    ElevatedButton(
        onClick = onclick,
        colors = ButtonDefaults.buttonColors(
            containerColor = colorResource(id = R.color.blueTwo)
        ),
        shape = RoundedCornerShape(20.dp),
        modifier = Modifier
            .width(200.dp)
            .padding(top = 20.dp)
    ) {
        Text(
            text = text,
            fontWeight = FontWeight.Bold,
            fontSize = 20.sp,
            color = Color.White
        )
    }
}