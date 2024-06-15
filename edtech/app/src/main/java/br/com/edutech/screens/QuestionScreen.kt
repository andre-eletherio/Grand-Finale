package br.com.edutech.screens

import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import br.com.edutech.components.BackButton
import br.com.edutech.components.Container
import br.com.edutech.components.CustomSpacer
import br.com.edutech.model.Question
import br.com.edutech.service.RetrofitFactory
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

@RequiresApi(Build.VERSION_CODES.TIRAMISU)
@Composable
fun QuestionScreen(navController: NavController, name: String, id: String) {

    var question = remember {
        mutableStateOf<Question>(Question(name = name, answer1 = "", answer2 = "", answer3 = "", correct = 0, id = 0, title = ""))
    }

    fun getQuestion() {
        var call = RetrofitFactory().userService().getQuestion(name)
        call.enqueue(object : Callback<Question> {
            override fun onResponse(call: Call<Question>, response: Response<Question>) {
                if (response.code() == 200) {
                    val questionResponse = response.body()
                    if (questionResponse != null) {
                        question.value = questionResponse
                    }
                }
                Log.i("consolelog", "onResponse: ${response.body()}")
            }

            override fun onFailure(call: Call<Question>, t: Throwable) {
                Log.i("RegisterScreen", "Error", t)
            }
        })
    }

    DisposableEffect(Unit) {
        getQuestion()
        onDispose { /* Nada a limpar */ }
    }

    Container {
        Text(
            text = question.value.title.toString(),
            fontWeight = FontWeight.Bold,
            fontSize = 30.sp,
            color = Color.Black,
            textAlign = TextAlign.Center
        )
        CustomSpacer(space = 50.dp)
        Answer(question.value.answer1.toString(), question.value.correct == 1, ::getQuestion)
        CustomSpacer(space = 15.dp)
        Answer(question.value.answer2.toString(), question.value.correct == 2, ::getQuestion)
        CustomSpacer(space = 15.dp)
        Answer(question.value.answer3.toString(), question.value.correct == 3, ::getQuestion)
        CustomSpacer(space = 20.dp)
        BackButton(onclick = { navController.navigate("mainEd/${id}") }, text = "Voltar")
    }
}

@Composable
fun Answer(name: String, isCorrect: Boolean, getQuestion: () -> Unit) {

    var clicked by remember {
        mutableStateOf(false)
    }

    LaunchedEffect(name) {
        clicked = false
    }

    fun onClick() {
        clicked = true
        if (isCorrect) {
            clicked = false
            getQuestion()
        }
    }

    Row(
        modifier = Modifier
            .fillMaxSize()
            .clip(RoundedCornerShape(30.dp))
            .background(color = if (clicked && !isCorrect) Color.Red else Color.White)
            .padding(vertical = 15.dp)
            .clickable { onClick() },
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = name,
            fontWeight = FontWeight.Bold,
            fontSize = 20.sp,
        )
    }
}
