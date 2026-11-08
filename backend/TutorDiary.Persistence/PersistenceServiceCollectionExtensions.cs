using Microsoft.Extensions.DependencyInjection;

namespace TutorDiary.Persistence;

public static class PersistenceServiceCollectionExtensions
{
    public static IServiceCollection AddTutorDiaryPersistence(this IServiceCollection services)
    {
        return services;
    }
}
