using Microsoft.AspNetCore.Http.HttpResults;

namespace TutorDiary.Api.Health;

internal static class HealthEndpoints
{
    public static IEndpointRouteBuilder MapHealthEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapGet("/api/health", GetHealth);

        return endpoints;
    }

    private static Ok<HealthResponse> GetHealth()
    {
        return TypedResults.Ok(new HealthResponse("ok"));
    }
}
