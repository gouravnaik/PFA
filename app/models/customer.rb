class Customer < ActiveRecord::Base
   attr_accessible :name, :address, :mobile_no
   has_many :pets
end
