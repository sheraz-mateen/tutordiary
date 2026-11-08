using TutorDiary.Api.Health;
using TutorDiary.Core;
using TutorDiary.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddTutorDiaryCore()
    .AddTutorDiaryPersistence();

var app = builder.Build();

app.MapHealthEndpoints();

app.Run();
