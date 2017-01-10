findMissing:function (val1, val2)
{
  for(i=0;i<val2.length;i++)
  {
    var temp = val2[i];
    var exist= false;
    for(j=0;j<val1.length;j++)
    {
      if(temp==val1[j])
      {
        exist=true;
        break;
      }
    }
    if(exist==false)
    {
      return temp;
    }
  }
  return 0;
}