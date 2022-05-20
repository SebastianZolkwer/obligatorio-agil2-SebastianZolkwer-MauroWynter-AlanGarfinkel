using MinTur.Domain.BusinessEntities;

namespace MinTur.Models.In
{
    public class ChargingPointIntentModel
    {
        public int RegionId { get; set; }
        public string Name { get; set; }
        public string Indetifier { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }

        public ChargingPoint ToEntity()
        {
            return new ChargingPoint()
            {
                RegionId = RegionId,
                Name = Name,
                Description = Description,
                Address = Address,
                Indetifier = Indetifier
            };
        }
    }
}