using Microsoft.EntityFrameworkCore;
using MinTur.DataAccessInterface.Repositories;
using MinTur.Domain.BusinessEntities;

namespace MinTur.DataAccess.Repositories
{
    public class ChargingPointRepository : IChargingPointRepository
    {

        protected DbContext Context { get; set; }

        public ChargingPointRepository(DbContext dbContext)
        {
            Context = dbContext;
        }
        public ChargingPoint CreateChargingPoint(ChargingPoint chargingPoint)
        {
            Context.Entry(chargingPoint.Region).State = EntityState.Unchanged;

            Context.Set<ChargingPoint>().Add(chargingPoint);
            Context.SaveChanges();

            Context.Entry(chargingPoint.Region).State = EntityState.Detached;

            return chargingPoint;
        }
    }
}